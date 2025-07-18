import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'

export function OrixaCard({ orixa, onClick }) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-blue-500"
      onClick={() => onClick(orixa)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-blue-700">
            {orixa.name}
          </CardTitle>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Orixá
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {orixa.perfil && (
            <p className="text-sm text-gray-700 line-clamp-3">
              {orixa.perfil}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

