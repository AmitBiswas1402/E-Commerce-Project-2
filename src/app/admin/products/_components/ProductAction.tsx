import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { startTransition } from "react";


export function ActiveToggleDropdownItem({id, isAvailableForPurchase}: {id: string, isAvailableForPurchase: boolean}) {
    return <DropdownMenuItem onClick={() => {
        startTransition
    }}>
        
    </DropdownMenuItem>
}

export function DeleteDropdownItem() {

}