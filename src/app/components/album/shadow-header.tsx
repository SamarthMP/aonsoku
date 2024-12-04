import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type ShadowHeaderProps = ComponentProps<'div'> & {
  showGlassEffect?: boolean
  fixed?: boolean
}

export function ShadowHeader({
  children,
  className,
  showGlassEffect = true,
  fixed = true,
  ...rest
}: ShadowHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-start px-8 h-[--shadow-header-height] border-b bg-background',
        fixed &&
          'fixed top-[--header-height] right-0 left-[--mini-sidebar-width] lg:left-[--sidebar-width] z-30',
        showGlassEffect &&
          'backdrop-blur-xl supports-[backdrop-filter]:bg-background/60',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
