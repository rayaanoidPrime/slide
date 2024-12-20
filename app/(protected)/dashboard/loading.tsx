import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen flex dark bg-background">
      {/* Sidebar Skeleton */}
      <div className="w-64 border-r border-border bg-card fixed inset-y-0">
        {/* Logo area */}
        <div className="p-6">
          <Skeleton className="h-6 w-24" />
        </div>

        {/* Navigation Items */}
        <div className="px-4 space-y-2">
          {[...Array(7)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-full rounded-lg" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 pl-64">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-10 w-40 rounded-full" />
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="p-6 bg-card border-border space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </Card>
            ))}
          </div>

          {/* Graph Section */}
          <Card className="p-6 bg-card border-border">
            <div className="space-y-4">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-[200px] w-full rounded-lg" />
            </div>
          </Card>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
              <Card key={i} className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-12 w-16" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
