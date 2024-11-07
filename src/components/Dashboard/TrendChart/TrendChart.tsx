import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '@mui/material';

export interface AreaChartItem {
  date: string;
  value: number;
}

interface TrendChartProps {
  data: AreaChartItem[];
}

export function TrendChart({ data }: TrendChartProps) {
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6A1B9A" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#6A1B9A" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid stroke="#E0E0E0" />

        <XAxis
          dataKey="date"
          fontSize={12}
          fill={theme.palette.greyScale?.body}
        />

        <YAxis
          fontSize={12}
          fill={theme.palette.greyScale?.body}
          width={60}
          domain={[0, 2000]}
          tickFormatter={(value) => `${value}\u00A0TB`}
        />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="value"
          stroke="#6A1B9A"
          fill="url(#colorValue)"
          fillOpacity={0.8}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
