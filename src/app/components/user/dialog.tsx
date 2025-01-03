import { useTranslation } from 'react-i18next'
import { Dialog, DialogContent, DialogHeader } from '@/app/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { User } from '@/types/responses/users'

interface UserDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void,
  user: User
}

export function UserDialog({ open, onOpenChange, user }: UserDialogProps) {
  const { t } = useTranslation()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {user.username}
          </DialogTitle>
        </DialogHeader>

      </DialogContent>
    </Dialog>
  )
}
