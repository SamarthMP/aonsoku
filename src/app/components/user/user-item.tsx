import { User } from "@/types/responses/users";
import { CommandItem } from "../ui/command";
import { CustomCommandItem } from "../command/command-item";
import { Badge } from "../ui/badge";
import { useTranslation } from "react-i18next";
import { useAppStore } from "@/store/app.store";
import { useState } from "react";
import { UserDialog } from "./dialog";

interface UserItemProps {
    user: User
}

export default function UserItem({ user }: UserItemProps) {

    const [dialogOpen, setDialogOpen] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            <CommandItem
                key={user.username}
                onSelect={() => setDialogOpen(true)}
            >
                <CustomCommandItem variant="UserManagement">
                    {user.username}
                    {
                        user.adminRole && 
                        <Badge variant="outline">
                            {t('server.users.admin')}
                        </Badge>
                    }
                    {
                        user.username.toLowerCase() == useAppStore.getState().data.username && 
                        <Badge variant="outline">
                            {t('server.users.you')}
                        </Badge>
                    }
                </CustomCommandItem>
            </CommandItem>
            <UserDialog open={dialogOpen} onOpenChange={setDialogOpen} user={user}></UserDialog>
        </>

    )
}