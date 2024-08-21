import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getInitials } from "@/lib/utils"

interface AvatarsProps {
  avatar: { image: string | null; name: string }[]
}

export const Avatars = ({ avatar }: AvatarsProps) => {
  return (
    <div className="flex -space-x-3">
      {avatar.map(({ image, name }) => (
        <Avatar
          key={image}
          className="outline outline-4 outline-muted-foreground"
        >
          <AvatarImage src={`${image}`} alt="" />
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}
