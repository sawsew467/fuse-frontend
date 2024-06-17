import { cn } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface SelectLayoutProps {
    className?: string;
    label?: string;
    placeholder?: string;
    options: {
        label: string;
        items: {
            value: string;
            label: string;
        }[];
    }[];
}

export default function SelectLayout({
    className,
    label,
    placeholder,
    options,
}: SelectLayoutProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-2",
                className,
            )}
        >
            {label &&
                <h5 className='text-sm font-semibold'>{label}</h5>
            }
            {
                placeholder && options && (
                    <Select>
                        <SelectTrigger className="bg-transparent ">
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {options.map((group, index) => (
                                <SelectGroup key={index}>
                                    <SelectLabel>{group.label}</SelectLabel>
                                    {group.items.map((item, idx) => (
                                        <SelectItem key={idx} value={item.value}>{item.label}</SelectItem>
                                    ))}
                                </SelectGroup>
                            ))}
                        </SelectContent>
                    </Select>
                )
            }
        </div>
    )
}
