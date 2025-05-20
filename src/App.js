import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { year: 2005, Landfill: 2687060, Recycle: 511648 },
  { year: 2006, Landfill: 2857320, Recycle: 479999 },
  { year: 2007, Landfill: 2995260, Recycle: 495300 },
  { year: 2008, Landfill: 2956960, Recycle: 548928 },
  { year: 2009, Landfill: 2655980, Recycle: 603414 },
  { year: 2010, Landfill: 2568490, Recycle: 674754 },
  { year: 2011, Landfill: 2429680, Recycle: 649280 },
  { year: 2012, Landfill: 2177620, Recycle: 690572 },
  { year: 2013, Landfill: 2232170, Recycle: 687168 },
  { year: 2014, Landfill: 1970250, Recycle: 709272 },
  { year: 2015, Landfill: 1879540, Recycle: 765080 },
  { year: 2016, Landfill: 1870150, Recycle: 792956 },
  { year: 2017, Landfill: 1690080, Recycle: 773772 },
  { year: 2018, Landfill: 1569250, Recycle: 744834 },
  { year: 2019, Landfill: 1378470, Recycle: 751048 },
  { year: 2020, Landfill: 943660,  Recycle: 566340 },
  { year: 2021, Landfill: 1299090, Recycle: 726692 },
  { year: 2022, Landfill: 1177290, Recycle: 713618 },
];

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "green" }}>SCU Waste Trend Dashboard</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(val) => `${(val / 1e6).toFixed(1)}M`} />
          <Tooltip formatter={(value) => `${value.toLocaleString()} lbs`} />
          <Legend />
          <Line type="monotone" dataKey="Landfill" stroke="#d9534f" strokeWidth={2} />
          <Line type="monotone" dataKey="Recycle" stroke="#5cb85c" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;

