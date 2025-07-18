import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'

export function OduCard({ odu, onClick }) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-amber-500"
      onClick={() => onClick(odu)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-amber-700">
            {odu.name}
          </CardTitle>
          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
            {odu.id}
          </Badge>
        </div>
        <CardDescription className="text-sm text-gray-600">
          {odu.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-sm">
            <span className="font-semibold text-purple-700">Fala:</span> {odu.fala}
          </div>
          {odu.description && (
            <p className="text-sm text-gray-700 line-clamp-3">
              {odu.description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

