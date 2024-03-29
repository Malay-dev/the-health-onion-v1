
  export function DashboardHeader({
    heading,
    text,
    children,
  }) {
    return (
      <div className="flex items-center justify-between mb-5 px-5 md:px-0">
        <div className="grid gap-1">
          <h1 className="font-bold text-3xl md:text-4xl">{heading}</h1>
          {text && <p className="text-lg text-muted-foreground">{text}</p>}
        </div>
        {children}
      </div>
    )
  }
  