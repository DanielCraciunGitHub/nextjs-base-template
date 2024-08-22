import { Star } from "@/components/SVG/Star"

interface StarsProps {
  howMany?: number
}

/**
 * `Stars` component renders a row of star icons, typically used to display a rating.
 *
 * @component
 * @param howMany - Optional number of stars to display, defaults to 5 if not provided.
 */
export const Stars = ({ howMany = 5 }: StarsProps) => {
  return (
    <div className="flex">
      {Array.from({ length: howMany }, (_, i) => (
        <Star key={i} />
      ))}
    </div>
  )
}
