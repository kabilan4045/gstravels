import { Users } from "lucide-react";

export default function VehicleCard({ vehicle }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* TODO: Replace placeholder vehicle images once client uploads actual fleet photos */}
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 text-brand-primary/40">
        <span className="text-sm font-medium">Photo coming soon</span>
      </div>
      <div className="p-5">
        <span className="inline-block rounded-full bg-brand-bg px-3 py-1 text-xs font-semibold text-brand-primary">
          {vehicle.category}
        </span>
        <h3 className="mt-3 text-lg font-bold text-brand-primary">
          {vehicle.category}
        </h3>
        <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
          <Users size={14} />
          {vehicle.capacity}
        </div>
        <p className="mt-2 text-sm text-slate-600">{vehicle.description}</p>
      </div>
    </div>
  );
}
