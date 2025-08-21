import { useEffect, useState } from 'react';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

interface ChartData {
  name: string;
  value: number;
  growth: number;
  volume: number;
}

export function DynamicCharts() {
  const [data, setData] = useState<ChartData[]>([]);
  const [realtimeData, setRealtimeData] = useState<ChartData[]>([]);

  useEffect(() => {
    // Generate initial data
    const generateData = () => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return months.map((month, index) => ({
        name: month,
        value: 1000 + Math.random() * 5000 + index * 200,
        growth: 50 + Math.random() * 100 + index * 10,
        volume: 2000 + Math.random() * 3000 + index * 150
      }));
    };

    setData(generateData());

    // Real-time data simulation
    const interval = setInterval(() => {
      setRealtimeData(prev => {
        const newData = [...prev];
        const time = new Date().toLocaleTimeString();
        
        newData.push({
          name: time,
          value: 2000 + Math.random() * 2000,
          growth: 30 + Math.random() * 70,
          volume: 1500 + Math.random() * 2500
        });

        // Keep only last 20 data points
        if (newData.length > 20) {
          newData.shift();
        }
        
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800/90 backdrop-blur-xl border border-white/20 rounded-lg p-3 shadow-xl">
          <p className="text-white font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-cyan-400 text-sm">
              {entry.name}: {typeof entry.value === 'number' ? entry.value.toFixed(2) : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flow-section py-20 relative">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="flow-text text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Live Analytics Dashboard
          </h2>
          <p className="flow-text text-xl text-white/70 max-w-3xl mx-auto">
            Real-time financial data visualization with interactive charts and live market updates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Growth Chart */}
          <div className="flow-card bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Annual Growth</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#ffffff80', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#ffffff80', fontSize: 12 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="growth"
                    stroke="#6366f1"
                    strokeWidth={2}
                    fill="url(#growthGradient)"
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Volume Chart */}
          <div className="flow-card bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Transaction Volume</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#ffffff80', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#ffffff80', fontSize: 12 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="volume"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#06b6d4', strokeWidth: 2 }}
                    animationDuration={1500}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Real-time Chart */}
        <div className="flow-card bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">Live Market Data</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Live</span>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={realtimeData}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#ffffff80', fontSize: 10 }}
                  interval="preserveStartEnd"
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#ffffff80', fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                  animationDuration={500}
                />
                <Line
                  type="monotone"
                  dataKey="volume"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  dot={false}
                  animationDuration={500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <div className="text-2xl font-bold text-green-400">
                ${realtimeData.length > 0 ? realtimeData[realtimeData.length - 1]?.value.toFixed(0) : '2,459'}
              </div>
              <div className="text-sm text-white/60">Current Value</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <div className="text-2xl font-bold text-blue-400">
                {realtimeData.length > 0 ? realtimeData[realtimeData.length - 1]?.volume.toFixed(0) : '1,847'}
              </div>
              <div className="text-sm text-white/60">Volume</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <div className="text-2xl font-bold text-purple-400">
                +{realtimeData.length > 0 ? ((Math.random() * 10) + 2).toFixed(1) : '5.2'}%
              </div>
              <div className="text-sm text-white/60">24h Change</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <div className="text-2xl font-bold text-yellow-400">
                {realtimeData.length}
              </div>
              <div className="text-sm text-white/60">Data Points</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}