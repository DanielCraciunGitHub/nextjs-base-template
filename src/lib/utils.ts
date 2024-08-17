import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * @example ```
 * nameToPath("Daniel C") => "daniel_c"
 * ```
 * @param name
 * @returns
 */
export function nameToPath(name: string): string {
  return `/${name.toLowerCase().replaceAll(" ", "_")}`
}

/**
 * @example ```
 * pathToName("daniel_c") => "Daniel C"
 * ```
 * @param name
 * @returns
 */
export function pathToName(path: string | undefined): string | undefined {
  const cleanedPath = path?.replace(/^\//, "")

  const nameWithSpaces = cleanedPath?.replace(/_/g, " ")

  const words = nameWithSpaces?.split(" ")
  const capitalizedWords = words?.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  )

  return capitalizedWords?.join(" ")
}

/**
 * @example ```
 * getInitials("Daniel Craciun") => "DC"
 * ```
 * @param name
 * @returns
 */
export function getInitials(name?: string | null): string | undefined {
  // Split the name into words
  const words = name?.trim().split(/\s+/)

  // Get the first letter of each word and capitalize it
  const initials = words?.map((word) => word.charAt(0).toUpperCase()).join("")

  return initials
}

export function formatProductPrice(currency: string, price: number) {
  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
    // You can adjust these options if needed:
    // minimumFractionDigits: 0, // (for whole numbers)
    // maximumFractionDigits: 0, // (to round decimals)
  })
  return formatter.format(price)
}
