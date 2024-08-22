import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getInitials } from "@/lib/utils"

interface AvatarsProps {
  avatar: { image: string | null; name: string }[]
}

/**
 * `Avatars` component renders a group of avatars, each representing an individual with an image or initials fallback.
 *
 * @component
 * @param avatar - An array of objects, each containing an image URL or null, and a name for generating initials.
 */
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
