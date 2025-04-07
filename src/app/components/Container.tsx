
interface ContainerProps {
    children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
return (
        <div className="flex flex-col h-screen bg-skyMist text-softNavy">
            {children}
        </div>
    )
}