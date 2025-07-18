import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { Separator } from '@/components/ui/separator.jsx'

export function DetailModal({ item, isOpen, onClose, type }) {
  if (!item) return null

  const isOdu = type === 'odu'

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className={`text-xl font-bold ${isOdu ? 'text-amber-700' : 'text-blue-700'}`}>
              {item.name}
            </DialogTitle>
            <Badge variant="secondary" className={isOdu ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}>
              {isOdu ? item.id : 'Orixá'}
            </Badge>
          </div>
          {item.subtitle && (
            <DialogDescription className="text-gray-600">
              {item.subtitle}
            </DialogDescription>
          )}
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4">
            {item.fala && (
              <div>
                <h3 className="font-semibold text-purple-700 mb-2">Fala:</h3>
                <p className="text-sm text-gray-700">{item.fala}</p>
              </div>
            )}

            {item.description && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Descrição:</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            )}

            {item.perfil && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Perfil das Pessoas:</h3>
                <p className="text-sm text-gray-700">{item.perfil}</p>
              </div>
            )}

            {item.temperamento && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Temperamento:</h3>
                <p className="text-sm text-gray-700">{item.temperamento}</p>
              </div>
            )}

            {item.personalidade && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Personalidade:</h3>
                <p className="text-sm text-gray-700">{item.personalidade}</p>
              </div>
            )}

            {item.energia && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Energia:</h3>
                <p className="text-sm text-gray-700">{item.energia}</p>
              </div>
            )}

            {item.tendencias && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Tendências:</h3>
                <p className="text-sm text-gray-700">{item.tendencias}</p>
              </div>
            )}

            {item.tendenciasJogo && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Tendências no Jogo:</h3>
                <p className="text-sm text-gray-700">{item.tendenciasJogo}</p>
              </div>
            )}

            {item.caminhos && item.caminhos.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Caminhos de Odù:</h3>
                <div className="space-y-2">
                  {item.caminhos.map((caminho, index) => (
                    <div key={index} className="text-sm text-gray-700">
                      <span className="font-medium">{index + 1} -</span> {caminho}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {item.lembretes && item.lembretes.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Lembretes:</h3>
                <div className="space-y-2">
                  {item.lembretes.map((lembrete, index) => (
                    <div key={index} className="text-sm text-gray-700">
                      • {lembrete}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

