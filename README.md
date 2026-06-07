# 韓語初學

這是一個給台灣韓語零基礎學習者使用的靜態自學網站，可以直接部署到 GitHub Pages。

## 內容

- 學習：韓文 40 音、發音規則、拼字、旅行常用詞語、旅行常用句子、生活常用語句
- 練習：聽 40 音選字、聽音選詞、看中文選韓文、韓字拼字實驗、生活主題單字
- 紀錄：本機學習分鐘、熟悉音標、每日打卡、筆記與進度匯出

## GitHub Pages 部署

1. 在 GitHub 建立一個新的 repository。
2. 將這個資料夾內的 `index.html`、`styles.css`、`script.js`、`README.md`、`.nojekyll` 推到 repository 根目錄。
3. 進入 repository 的 `Settings`。
4. 打開 `Pages`。
5. Source 選擇 `Deploy from a branch`。
6. Branch 選擇 `main`，資料夾選擇 `/root`。
7. 儲存後等待 GitHub 產生網址。

如果 repository 名稱是 `korean-beginner`，網址通常會是：

```text
https://你的帳號.github.io/korean-beginner/
```

如果想做成個人首頁，repository 名稱可設為：

```text
你的帳號.github.io
```

這個網站不需要 build step，也不需要後端服務。發音播放使用瀏覽器內建語音功能，建議用 Chrome、Edge 或 Safari 開啟。

## 參考方向

- Hahow 韓語 40 音入門文章：https://hahow.in/contents/articles/62394f68ef6ea8000685633a
- How to Study Korean：https://www.howtostudykorean.com/
