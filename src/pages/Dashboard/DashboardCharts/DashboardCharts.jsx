import { useContext, useEffect, useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import axios from "axios";
import { AuthContext } from "../../../contexts/AuthContext";

const COLORS = ["#7A6AE0", "#9E8FF5", "#4B1CCB", "#8748FF"];

const DashboardCharts = () => {
  const { user } = useContext(AuthContext);
  const [categoryData, setCategoryData] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    axios
      .get(
        `https://utility-bill-management.vercel.app/payments/summary?email=${user.email}`
      )
      .then((res) => {
        setCategoryData(res.data.categoryData || []);
        setPayments(res.data.payments || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Dashboard data error:", err);
        setLoading(false);
      });
  }, [user?.email]);

  const lineChartData = useMemo(() => {
    return payments.map((p) => ({
      ...p,
      amount: Number(p.amount),
      date: p.date ? new Date(p.date).toLocaleDateString("en-GB") : "",
    }));
  }, [payments]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (categoryData.length === 0) {
    return (
      <p className="text-center text-gray-500 py-20">
        No payment analytics available
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8">Payment Analytics</h2>

      {/* Bar Chart */}
      <div className="bg-white shadow p-4 rounded mb-10">
        <h3 className="text-xl font-semibold mb-4">
          Category Wise Payments (Bar)
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#7A6AE0" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white shadow p-4 rounded mb-10">
        <h3 className="text-xl font-semibold mb-4">
          Payment Distribution (Pie)
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="amount"
              nameKey="category"
              outerRadius={120}
              label
            >
              {categoryData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="bg-white shadow p-4 rounded">
        <h3 className="text-xl font-semibold mb-4">Payment Trend (Line)</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#4B1CCB"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
