'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { useGroup } from '@/contexts/GroupContext'
import { searchGroups, getGroupByUsername, Group } from '@/lib/data'

export default function GroupSelector() {
  const { selectedGroup, setSelectedGroup } = useGroup()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Group[]>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true)
      // Show suggestions as user types (debounced)
      const timer = setTimeout(() => {
        const results = searchGroups(searchQuery)
        setSearchResults(results)
        setIsSearching(false)
      }, 200)
      return () => clearTimeout(timer)
    } else {
      setSearchResults([])
      setIsSearching(false)
    }
  }, [searchQuery])

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Try to find by username first (with or without @)
      const groupByUsername = getGroupByUsername(searchQuery)
      if (groupByUsername) {
        setSelectedGroup(groupByUsername)
        setSearchQuery('')
        setSearchResults([])
        return
      }
      
      // Otherwise show search results
      const results = searchGroups(searchQuery)
      if (results.length === 1) {
        setSelectedGroup(results[0])
        setSearchQuery('')
        setSearchResults([])
      } else {
        setSearchResults(results)
      }
    }
  }

  const handleSelectGroup = (group: Group) => {
    setSelectedGroup(group)
    setSearchQuery('')
    setSearchResults([])
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Your Group</h2>
      <p className="text-gray-600 mb-6">
        Enter your Telegram group username (e.g., @techcommunity) or group name to view analytics
      </p>

      <div className="relative mb-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by username (e.g., @techcommunity) or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSearchResults([])
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <button
            onClick={handleSearch}
            disabled={!searchQuery.trim()}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Search
          </button>
        </div>
      </div>

      {/* Search Suggestions - Show as you type */}
      {searchQuery.trim() && searchResults.length > 0 && (
        <div className="mt-2 border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-700">
              Suggestions ({searchResults.length})
            </p>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {searchResults.map((group) => (
              <button
                key={group.id}
                onClick={() => handleSelectGroup(group)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">{group.name}</div>
                    <div className="text-sm text-gray-500">@{group.username}</div>
                    {group.description && (
                      <div className="text-xs text-gray-400 mt-1">{group.description}</div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-700">
                      {group.members.toLocaleString()} members
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {isSearching && (
        <div className="text-center py-4 text-gray-500">
          Searching...
        </div>
      )}

      {searchQuery && !isSearching && searchResults.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          No groups found. Try searching with a different name or username.
        </div>
      )}

      {/* Selected Group Display */}
      {selectedGroup && (
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{selectedGroup.name}</h3>
              <p className="text-sm text-gray-600">@{selectedGroup.username}</p>
              {selectedGroup.description && (
                <p className="text-xs text-gray-500 mt-1">{selectedGroup.description}</p>
              )}
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">
                {selectedGroup.members.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Members</div>
            </div>
          </div>
          <button
            onClick={() => setSelectedGroup(null)}
            className="mt-4 text-sm text-gray-600 hover:text-gray-900 underline"
          >
            Change group
          </button>
        </div>
      )}

      {!selectedGroup && !searchQuery && (
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
          <p className="text-sm text-gray-600">
            Enter a group username or name above to get started
          </p>
        </div>
      )}
    </div>
  )
}
