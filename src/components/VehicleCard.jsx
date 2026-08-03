import { Users, Camera } from "lucide-react";
import ResponsiveImg from "./ResponsiveImg";

export default function VehicleCard({ vehicle, photo, bestFor, reverse, hasPhoto = true }) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-6 border-b border-brand-line py-10 first:pt-0 last:border-b-0 lg:grid-cols-2 lg:gap-10 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="overflow-hidden rounded-lg border border-brand-line">
        {hasPhoto ? (
          <ResponsiveImg
            src={photo}
            alt={`GS Travels ${vehicle.category}`}
            className="h-64 w-full object-cover lg:h-72"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        ) : (
          // TODO: replace with real photo of this vehicle type from client
          <div
            className="flex h-64 w-full items-center justify-center bg-brand-primary/[0.04] lg:h-72"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(130,176,26,0.09) 0, rgba(130,176,26,0.09) 1px, transparent 1px, transparent 13px)",
            }}
          >
            <div className="flex flex-col items-center gap-2 text-brand-primary-dark/45">
              <Camera size={26} strokeWidth={1.5} />
              <span className="text-eyebrow">Photo coming soon</span>
            </div>
          </div>
        )}
      </div>
      <div>
        {bestFor && (
          <span className="text-eyebrow text-brand-primary-dark">
            Best for {bestFor}
          </span>
        )}
        <h3 className="text-display-m mt-2 text-brand-ink">{vehicle.category}</h3>
        <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-brand-ink/55">
          <Users size={14} />
          {vehicle.capacity}
        </div>
        <p className="mt-3 text-base text-brand-ink/65">{vehicle.description}</p>
      </div>
    </div>
  );
}
