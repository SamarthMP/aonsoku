import { Keyboard, LogOut, User } from 'lucide-react'
import { Fragment, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useTranslation } from 'react-i18next'

import { ShortcutsDialog } from '@/app/components/shortcuts/dialog'
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu'
import { LogoutObserver } from '@/app/observers/logout-observer'
import { useAppData, useAppStore } from '@/store/app.store'
import { isMac } from '@/utils/osType'
import { isTauri } from '@/utils/tauriTools'
import { LangSelect } from './lang-select'
import { ThemeSelect } from './theme-select'

export function UserDropdown() {
  const { username, url } = useAppData()
  const setLogoutDialogState = useAppStore(
    (state) => state.actions.setLogoutDialogState,
  )
  const { t } = useTranslation()
  const [shortcutsOpen, setShortcutsOpen] = useState(false)

  useHotkeys('shift+ctrl+q', () => setLogoutDialogState(true))
  useHotkeys('mod+/', () => setShortcutsOpen((prev) => !prev))

  function getAlignPosition() {
    if (!isTauri()) return 'end'

    if (isMac) return 'end'

    return 'center'
  }

  return (
    <Fragment>
      <LogoutObserver />

      <ShortcutsDialog
        open={shortcutsOpen}
        onOpenChange={(open) => setShortcutsOpen(open)}
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="user-dropdown-trigger">
          <Avatar className="w-8 h-8 rounded-full cursor-pointer">
            <AvatarFallback className="text-sm hover:bg-accent">
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align={getAlignPosition()} className="min-w-64">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium leading-none">{username}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {url}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <LangSelect />
          <ThemeSelect />
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setShortcutsOpen(true)}>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>{t('shortcuts.modal.title')}</span>
            <DropdownMenuShortcut>{'⌘/'}</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setLogoutDialogState(true)}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>{t('menu.serverLogout')}</span>
            <DropdownMenuShortcut>{'⇧⌃Q'}</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Fragment>
  )
}
