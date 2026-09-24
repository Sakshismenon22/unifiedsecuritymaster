package com.example.unifiedsecuritymaster.batch;

import com.example.unifiedsecuritymaster.model.StockData;
import com.example.unifiedsecuritymaster.model.StockWatchList;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.listener.SkipListener;

import java.util.List;

@Slf4j
public class StockSkipListener implements SkipListener<StockWatchList, List<StockData>> {

    @Override
    public void onSkipInRead(Throwable t) {
        log.error("SKIP [read] {}", t.getMessage());
    }

    @Override
    public void onSkipInProcess(StockWatchList item, Throwable t) {
        log.error("SKIP [process] symbol={} isin={} reason={}",
                item.getSymbol(), item.getIsin(), t.getMessage());

        // Phase 2: persist to a load_error dead-letter table
    }

    @Override
    public void onSkipInWrite(List<StockData> item, Throwable t) {
        log.error("SKIP [write] {} records reason={}",
                item == null ? 0 : item.size(), t.getMessage());
    }
}
