"use client"

import type { RefObject } from "react"
import { useEffect } from "react"

type FocusableElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement
  | HTMLButtonElement
  | HTMLAnchorElement

type Key = string

interface KeyCombination {
  key: Key
  ctrlKey?: boolean
  shiftKey?: boolean
  altKey?: boolean
}

/**
 * Apply a keybind to an interactive element of your choice.
 *
 * @example ```
 * const buttonRef = useRef<HTMLButtonElement>(null)
 *
 * useKeybind(buttonRef, { key: "l", ctrlKey: true, shiftKey: true }, () =>
 *  buttonRef.current?.click()
 * )
 * ```
 *
 * @param ref
 * @param keyCombination
 * @param callback
 */
export const useKeybind = (
  ref: RefObject<FocusableElement>,
  keyCombination: KeyCombination,
  callback: () => void
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const {
        key,
        ctrlKey = false,
        shiftKey = false,
        altKey = false,
      } = keyCombination
      if (
        event.ctrlKey === ctrlKey &&
        event.shiftKey === shiftKey &&
        event.altKey === altKey &&
        event.key.toLowerCase() === key.toLowerCase()
      ) {
        event.preventDefault()
        callback()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [ref, keyCombination, callback])
}
