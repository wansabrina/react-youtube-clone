import React from "react";
import { ReactNode, createContext, useContext, useEffect, useState,} from "react"

// definisiin tipe data untuk properti yg diterima oleh komponen sidebar provider
type SidebarProviderProps = {
  children: ReactNode
}

// tipe data yg digunakan didalam context
type SidebarContextType = {
  isLargeOpen: boolean
  isSmallOpen: boolean
  toggle: () => void
  close: () => void
}

// sidebarcontext merupakan objek dari createcontext, untuk berbagi stats sidebar antara komponen2
const SidebarContext = createContext<SidebarContextType | null>(null)

export function useSidebarContext() {
  const value = useContext(SidebarContext)
  if (value == null) throw Error("Cannot use outside of SidebarProvider")

  return value
}

// provide informasi apakah sidebar terbuka/tertutup kepada komponen lain dalam app
// pake usestate untuk menyimpan informasi dengan menggunakan const2 dibawah ini
export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true)
  const [isSmallOpen, setIsSmallOpen] = useState(false)

  // buat menangani perubahan ukuran layar, layar kecil, sidebar akan menyesuaikan ukuran layar
  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsSmallOpen(false)
    }

    window.addEventListener("resize", handler)

    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [])

  function isScreenSmall() {
    return window.innerWidth < 1024
  }

  // mengubah status sidebar, jika layar kecil, maka akan membuka.nutup sidebar kecil
  // jika layar besar, akan membuka atau menutup sidebar besar
  function toggle() {
    if (isScreenSmall()) {
      setIsSmallOpen(s => !s)
    } else {
      setIsLargeOpen(l => !l)
    }
  }

  // fungsi untuk menutup sidebar, baik yg besar maupun kecil
  function close() {
    if (isScreenSmall()) {
      setIsSmallOpen(false)
    } else {
      setIsLargeOpen(false)
    }
  }

  return (
    // wdah yg digunakan untuk berbagi/menyimpan informasi ttg status sidebar ke kompenen lainnya
    <SidebarContext.Provider
      value={{
        isLargeOpen,
        isSmallOpen,
        toggle,
        close,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
