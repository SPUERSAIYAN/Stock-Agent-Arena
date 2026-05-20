import { useHealth } from "../hooks/useHealth";

export function Topbar() {
  const health = useHealth();

  return (
    <header className="topbar">
      <div className="brand-block">
        <div className="brand-mark">M</div>
        <div>
          <div className="eyebrow">Multi-Agent Investment</div>
          <h1>AI Stock Analyzer</h1>
        </div>
      </div>
      <nav className="topnav" aria-label="工作台导航">
        <a href="#control-panel">参数</a>
        <a href="#process-panel">流程</a>
        <a href="#result-panel">输出</a>
      </nav>
      <div className="topbar-right">
        <a
          className="github-link"
          href="https://github.com/SPUERSAIYAN/StockAgentWar"
          target="_blank"
          rel="noreferrer"
          title="Open GitHub repository"
          aria-label="Open GitHub repository"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.96c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
            />
          </svg>
          <span>GitHub</span>
        </a>
        <div className={`health ${health.status}`}>
          <span className="dot" />
          <span>{health.text}</span>
        </div>
      </div>
    </header>
  );
}
