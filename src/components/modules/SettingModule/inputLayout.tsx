import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputLayoutProps {
    className?: string;
    label?: string;
    placeholder?:string;
    type?:string;
    backgroundColor?: string;
}

function InputLayout({
    className,
    label,
    placeholder,
    type,
    backgroundColor,
}: InputLayoutProps) {
    return (
        <section
            className={cn(
                "",
                className,
            )}
            style={{
                backgroundColor,
            }}
        >
            <div className="flex flex-col gap-2">
                {label && (
                    <h3 className="text-sm font-semibold" dangerouslySetInnerHTML={{ __html: label }}/>
                )}
                {placeholder && type && (
                    <Input type={type} placeholder={placeholder} className="bg-transparent" />
                )}
            </div>
        </section>
    );
}

export default InputLayout;
