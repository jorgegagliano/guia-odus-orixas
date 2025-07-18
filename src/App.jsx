import { useState, useMemo } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Heart, BookOpen, Sparkles } from 'lucide-react'
import { OduCard } from './components/OduCard'
import { OrixaCard } from './components/OrixaCard'
import { SearchBar } from './components/SearchBar'
import { DetailModal } from './components/DetailModal'
import { odus } from './data/odus'
import { orixas } from './data/orixas'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const [modalType, setModalType] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [favorites, setFavorites] = useState(new Set())
  const [activeTab, setActiveTab] = useState('odus')

  // Filtrar dados baseado na pesquisa
  const filteredOdus = useMemo(() => {
    if (!searchTerm) return odus
    return odus.filter(odu => 
      odu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      odu.fala.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (odu.description && odu.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }, [searchTerm])

  const filteredOrixas = useMemo(() => {
    if (!searchTerm) return orixas
    return orixas.filter(orixa => 
      orixa.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (orixa.perfil && orixa.perfil.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (orixa.temperamento && orixa.temperamento.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }, [searchTerm])

  const handleItemClick = (item, type) => {
    setSelectedItem(item)
    setModalType(type)
    setIsModalOpen(true)
  }

  const toggleFavorite = (id, type) => {
    const favoriteKey = `${type}-${id}`
    const newFavorites = new Set(favorites)
    if (newFavorites.has(favoriteKey)) {
      newFavorites.delete(favoriteKey)
    } else {
      newFavorites.add(favoriteKey)
    }
    setFavorites(newFavorites)
  }

  const getFavoriteItems = () => {
    const favoriteOdus = odus.filter(odu => favorites.has(`odu-${odu.id}`))
    const favoriteOrixas = orixas.filter(orixa => favorites.has(`orixa-${orixa.id}`))
    return { favoriteOdus, favoriteOrixas }
  }

  const { favoriteOdus, favoriteOrixas } = getFavoriteItems()

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-amber-600" />
            <h1 className="text-3xl font-bold text-gray-800">Guia de Odus e Orixás</h1>
            <Sparkles className="h-8 w-8 text-blue-600" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore os conhecimentos ancestrais dos Odus e Orixás. Descubra significados, 
            tendências e orientações espirituais para seus estudos.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <SearchBar 
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Pesquisar Odus ou Orixás..."
          />
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="odus" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Odus
            </TabsTrigger>
            <TabsTrigger value="orixas" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Orixás
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favoritos
            </TabsTrigger>
          </TabsList>

          {/* Odus Tab */}
          <TabsContent value="odus">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOdus.map((odu) => (
                <div key={odu.id} className="relative">
                  <OduCard 
                    odu={odu} 
                    onClick={(item) => handleItemClick(item, 'odu')}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 p-1 h-8 w-8"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(odu.id, 'odu')
                    }}
                  >
                    <Heart 
                      className={`h-4 w-4 ${
                        favorites.has(`odu-${odu.id}`) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-400'
                      }`}
                    />
                  </Button>
                </div>
              ))}
            </div>
            {filteredOdus.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Nenhum Odu encontrado para "{searchTerm}"</p>
              </div>
            )}
          </TabsContent>

          {/* Orixás Tab */}
          <TabsContent value="orixas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOrixas.map((orixa) => (
                <div key={orixa.id} className="relative">
                  <OrixaCard 
                    orixa={orixa} 
                    onClick={(item) => handleItemClick(item, 'orixa')}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 p-1 h-8 w-8"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(orixa.id, 'orixa')
                    }}
                  >
                    <Heart 
                      className={`h-4 w-4 ${
                        favorites.has(`orixa-${orixa.id}`) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-400'
                      }`}
                    />
                  </Button>
                </div>
              ))}
            </div>
            {filteredOrixas.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Nenhum Orixá encontrado para "{searchTerm}"</p>
              </div>
            )}
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <div className="space-y-8">
              {favoriteOdus.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-amber-700 mb-4">Odus Favoritos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteOdus.map((odu) => (
                      <div key={odu.id} className="relative">
                        <OduCard 
                          odu={odu} 
                          onClick={(item) => handleItemClick(item, 'odu')}
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 p-1 h-8 w-8"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(odu.id, 'odu')
                          }}
                        >
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {favoriteOrixas.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-blue-700 mb-4">Orixás Favoritos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteOrixas.map((orixa) => (
                      <div key={orixa.id} className="relative">
                        <OrixaCard 
                          orixa={orixa} 
                          onClick={(item) => handleItemClick(item, 'orixa')}
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 p-1 h-8 w-8"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(orixa.id, 'orixa')
                          }}
                        >
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {favoriteOdus.length === 0 && favoriteOrixas.length === 0 && (
                <div className="text-center py-12">
                  <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Nenhum item favoritado ainda</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Clique no ícone de coração nos cartões para adicionar aos favoritos
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Detail Modal */}
        <DetailModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          type={modalType}
        />
      </div>
    </div>
  )
}

export default App

