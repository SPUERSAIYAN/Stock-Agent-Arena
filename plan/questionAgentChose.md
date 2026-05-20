**QuestionPlanningAgent** 只能选择 **6 个数据源入口**
[
  "us_equity",
  "china_equity",
  "macro",
  "prediction_markets",
  "crypto",
  "web_search"
]

**1. **us_equity**：美股 / 美股 ETF**

用于判断问题是否需要美股行情。

当前会拉：

* Tushare **us_basic**：美股基础列表
* Tushare **us_daily**：美股日线行情

例如：

* AAPL
* MSFT
* NVDA
* SPY
* QQQ
* 美股 ETF

不会直接让问题 Agent 输出 **tushare.us_daily**，它只会输出：

`<span><span>"selected_groups": ["us_equity"]</span></span>`

**2. **china_equity**：A 股 / A 股 ETF / 国内期货期权**

用于判断问题是否需要中国市场数据。

当前会拉：

* A 股行情：日 K、周 K、**daily_basic**
* A 股财务基本面：
  * **income**
  * **balancesheet**
  * **cashflow**
  * **fina_indicator**
  * **dividend**
  * **disclosure_date**
* 资金流 / 龙虎榜：
  * **moneyflow**
  * **moneyflow_hsgt**
  * **margin**
  * **margin_detail**
  * **top_list**
  * **top_inst**
* 指数 / ETF：
  * **index_basic**
  * **index_daily**
  * **index_weight**
  * **index_dailybasic**
  * **fund_basic**
  * **fund_daily**
  * **fund_nav**
* 国内期货期权：
  * **fut_basic**
  * **fut_daily**
  * **fut_mapping**
  * **opt_basic**
* 额外 A 股源：
  * Tencent 实时行情、估值、市值、换手率
  * MooTDX K 线、盘口、分时、财务摘要、F10
  * 本地 Excel **astockdate/全部A股20264.xlsx** 做概念板块候选发现

典型触发：

* A 股
* 沪深
* 600519
* 000001.SZ
* 半导体板块
* 白酒概念
* 龙虎榜
* 北向资金
* A 股 ETF
* 国内期货期权

**3. **macro**：宏观 / 利率 / 收益率曲线 / 风险偏好**

用于判断问题是否需要宏观背景。

当前会拉：

* Tushare 美国利率：
  * **us_tycr**：美国国债收益率曲线
  * **us_trycr**：美国实际收益率曲线
  * **us_tbr**：美国短期国债利率
  * **us_tltr**：美国长期国债利率
  * **us_trltr**：美国实际长期利率均值
* 中国宏观，仅当同时选择 **china_equity** 时保留：
  * **shibor**
  * **cn_gdp**
  * **cn_cpi**
  * **cn_pmi**
* 其他宏观补充：
  * U.S. Treasury
  * Fear & Greed

注意：如果用户问的是纯美股问题，**macro** 会偏向美国利率，不会拉中国宏观。

**4. **prediction_markets**：预测市场**

用于判断是否需要事件概率、市场隐含概率。

理论对应：

* Kalshi
* Polymarket

但当前配置默认关闭，而且 Tushare 没有等价替代。

所以只有用户明确问：

* 预测市场概率
* Kalshi / Polymarket
* 事件合约
* 某事件发生概率

问题 Agent 才应该选择它，并在 reason 里说明当前可能是数据缺口。

**5. **crypto**：加密货币**

用于判断是否需要 BTC/ETH/加密市场数据。

理论对应：

* CoinGecko
* Deribit
* Tushare crypto

但当前：

* 旧 crypto 默认关闭
* Tushare crypto 代理返回接口不存在

所以只有用户明确问：

* BTC
* ETH
* crypto
* 加密衍生品
* 加密风险偏好

问题 Agent 才应该选择它，并标注当前数据缺口。

**6. **web_search**：网页搜索补结构化缺口**

用于结构化 provider 覆盖不了的数据。

典型触发：

* MOVE
* OAS
* CDS
* BDI
* 某个指定网页
* 明确说需要网页补数据
