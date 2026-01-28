import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

const CodeBlock: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('javascript');

  const codeExamples = {
    javascript: `// Modern React Component with Hooks
import React, { useState, useEffect } from 'react';

const TechDashboard = () => {
  const [metrics, setMetrics] = useState({
    users: 0,
    performance: 0,
    uptime: 99.9
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      const response = await fetch('/api/metrics');
      const data = await response.json();
      setMetrics(data);
    };
    
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <h1>System Metrics</h1>
      <div className="metrics-grid">
        <MetricCard title="Active Users" value={metrics.users} />
        <MetricCard title="Performance" value={\`\${metrics.performance}%\`} />
        <MetricCard title="Uptime" value={\`\${metrics.uptime}%\`} />
      </div>
    </div>
  );
};

export default TechDashboard;`,

    python: `# Advanced Data Processing Pipeline
import asyncio
import pandas as pd
from datetime import datetime

class DataProcessor:
    def __init__(self, config):
        self.config = config
        self.cache = {}
        
    async def process_dataset(self, data):
        """Process large datasets with async operations"""
        try:
            # Data validation
            validated_data = await self.validate_data(data)
            
            # Parallel processing
            tasks = [
                self.clean_data(validated_data),
                self.enrich_data(validated_data),
                self.analyze_trends(validated_data)
            ]
            
            results = await asyncio.gather(*tasks)
            
            # Combine results
            processed_data = self.merge_results(results)
            
            return {
                'status': 'success',
                'data': processed_data,
                'timestamp': datetime.now(),
                'records_processed': len(data)
            }
            
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e),
                'timestamp': datetime.now()
            }

    async def validate_data(self, data):
        # Implementation for data validation
        return data.dropna()`
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeExamples[activeTab as keyof typeof codeExamples]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code');
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Código de Qualidade
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja exemplos do nosso trabalho técnico e expertise em desenvolvimento
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Code Editor Header */}
          <div className="bg-gray-700 px-4 py-3 flex items-center justify-between border-b border-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-600 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('javascript')}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    activeTab === 'javascript'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  JavaScript
                </button>
                <button
                  onClick={() => setActiveTab('python')}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    activeTab === 'python'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Python
                </button>
              </div>
              <button
                onClick={handleCopy}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Code Content */}
          <div className="p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 leading-relaxed">
              <code className="language-javascript">
                {codeExamples[activeTab as keyof typeof codeExamples]}
              </code>
            </pre>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400">
            {copied ? 'Código copiado para área de transferência!' : 'Clique no botão de copiar para pegar o código'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeBlock;