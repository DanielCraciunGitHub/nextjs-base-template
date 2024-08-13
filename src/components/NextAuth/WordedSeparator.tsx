interface WordedSeparatorProps {
  word: string
}

// ! This component can be used to separate the social auth and traditional auth with a worded separator.
// ! E.g. ----------or----------
export const WordedSeparator = ({ word }: WordedSeparatorProps) => {
  return (
    <div className="my-4 flex items-center">
      <div className="flex-grow border-t border-muted"></div>
      <span className="mx-1 flex-shrink text-sm text-muted-foreground">
        {word}
      </span>
      <div className="flex-grow border-t border-muted"></div>
    </div>
  )
}
