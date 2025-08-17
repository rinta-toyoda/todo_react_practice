# React + Vite + TypeScript + TailwindのTodoアプリ
## セットアップ
dependenciesをinstall
```
npm i
```

## アプリ起動
```
npm run dev
```

## 実装の説明
- todoはjotaiで管理されていて、src/routes/home/atoms.tsにて宣言されています。
- アプリにはホーム画面と404の画面のみあります。
- Todoを追加（add）したら、TodoがTodo Listに追加されます。その後にチェックマークを押すと、Finished Todosに入ります。ゴミ箱ボタンを押すと、Todoは削除されます。


## 動作画面
### Light Mode
<img width="3002" height="1602" alt="image" src="https://github.com/user-attachments/assets/a7096885-4656-4903-9479-e8d59dae3c10" />

### Dark Mode
<img width="3004" height="1616" alt="image" src="https://github.com/user-attachments/assets/547f69b4-e71e-40ad-9918-0c5ec06f283e" />
