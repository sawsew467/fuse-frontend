import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputLayoutProps {
    label?: string;
    placeholder?:string;
    backgroundColor?: string;
    className?: string;
}

function InputLayout({
    className,
    label,
    placeholder,
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
                    <h3 className="text-sm font-semibold">
                        {label}
                    </h3>
                )}
                {placeholder && (
                    <Input type="text" placeholder={placeholder} className="bg-transparent" />
                )}
            </div>
        </section>
    );
}

export default InputLayout;
