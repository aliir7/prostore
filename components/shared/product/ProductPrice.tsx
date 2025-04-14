import { cn } from "@/lib/utils";

interface ProductPriceProps {
  value: number;
  className?: string;
}

function ProductPrice({ value, className }: ProductPriceProps) {
  const stringValue = value.toFixed(2);

  // get int/float
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="align-super text-xs">$</span>
      {intValue}
      <span className="align-super text-xs">.{floatValue}</span>
    </p>
  );
}

export default ProductPrice;
