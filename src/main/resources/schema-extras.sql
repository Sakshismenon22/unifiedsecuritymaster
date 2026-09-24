-- Required by the ON CONFLICT clause in stockDataJdbcWriter
ALTER TABLE stock_data
    ADD CONSTRAINT uk_stock_data_symbol_date UNIQUE (symbol, trade_date);

CREATE INDEX IF NOT EXISTS idx_stock_data_symbol ON stock_data (symbol);
CREATE INDEX IF NOT EXISTS idx_stock_data_date   ON stock_data (trade_date);

-- Helpful for the batch metadata tables once volume