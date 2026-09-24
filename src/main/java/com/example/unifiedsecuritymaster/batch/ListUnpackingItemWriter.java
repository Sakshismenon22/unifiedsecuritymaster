package com.example.unifiedsecuritymaster.batch;

import lombok.RequiredArgsConstructor;
import org.springframework.batch.infrastructure.item.Chunk;
import org.springframework.batch.infrastructure.item.ItemWriter;

import java.util.List;

@RequiredArgsConstructor
public class ListUnpackingItemWriter<T> implements ItemWriter<List<T>> {

    private final ItemWriter<T> delegate;

    @Override
    public void write(Chunk<? extends List<T>> chunk) throws Exception {
        Chunk<T> flattened = new Chunk<>();
        for (List<T> sublist : chunk) {
            if (sublist != null && !sublist.isEmpty()) {
                sublist.forEach(flattened::add);
            }
        }
        if (!flattened.isEmpty()) {
            delegate.write(flattened);
        }
    }
}