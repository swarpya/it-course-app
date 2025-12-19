import { LucideIcon, Send, Heart, Camera } from "lucide-react"

const icons = {
  send: Send,
  heart: Heart,
  camera: Camera,
  // Add more icons as needed
}

interface IconProps {
  name: keyof typeof icons
  className?: string
  size?: number
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = icons[name]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <IconComponent className={className} size={size} />
}