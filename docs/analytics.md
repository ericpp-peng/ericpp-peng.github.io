# GA4 網站統計

網站已準備好 GA4 串接。**只有設定有效的 Measurement ID 並重新部署後才會開始收集資料。** 未設定時不載入 Google 統計程式，本機 `npm run dev` 也不會收集資料。

## 在你的 Google 帳戶建立

1. 登入 <https://analytics.google.com/>，建立 Analytics 帳戶與資源。名稱可填 **Po Peng's Portfolio**，報表時區選自己的時區。
2. 新增 **Web 資料串流**，網址填 `https://ericpp-peng.github.io/`。
3. 保持 **加強型評估 / Enhanced measurement** 開啟，包括頁面瀏覽、外連點擊、檔案下載。頁面瀏覽的進階設定應保留 **Page changes based on browser history events**，讓 Home / Projects / Snapshots 之間的切換也被記錄。
4. 複製串流詳細資料中的 **Measurement ID / 評估 ID**，格式為 `G-XXXXXXXXXX`。這是網站公開使用的代碼，不是帳戶密碼或 API secret。

官方說明：[建立 Analytics](https://support.google.com/analytics/answer/9304153?hl=zh-Hant)、[加強型評估](https://support.google.com/analytics/answer/9216061?hl=zh-Hant)。

## 啟用 GitHub.io

在 `ericpp-peng/ericpp-peng.github.io` repository 的 **Settings → Secrets and variables → Actions → Variables** 新增：

```text
Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: 你的 G-XXXXXXXXXX
```

接著在 **Actions → Deploy website to GitHub Pages → Run workflow**，選 `website-v2` 分支重新部署。新增或修改 variable 本身不會自動部署。日後修改網站、同步履歷 PDF 所觸發的部署也會沿用這個 variable。

若要停用，刪除或清空 variable，再重新部署即可。Measurement ID 會出現在公開網站的程式碼中，這是預期的安裝方式。不要在這個 variable 放 Google 帳戶密碼或 Measurement Protocol API secret。

## 可以看哪些資料

登入 Google Analytics，選擇這個資源：

- **Realtime / 即時**：用另一個瀏覽器開啟網站後，查看目前的造訪與事件。
- **Reports / 報表**：查看瀏覽量、流量來源、熱門頁面與事件。一般報表需要等待資料處理。
- `file_download`：網站中的履歷 PDF 連結點擊。這是點擊次數，不代表使用者已讀完或儲存 PDF；從外部直接開 PDF 不會經過網站的統計程式。
- `click`：前往 GitHub、LinkedIn、Instagram、YouTube 等其他網站的連結點擊。
- `snapshot_open`：使用者點開 Snapshots 影片。
- `project_video_open`：使用者點開 Projects 示範影片。

影片縮圖的自動播放不會被計入上述影片開啟事件。這兩個事件附帶 `video_title`；若要在一般報表中依影片名稱細分，可在 **Admin → Custom definitions** 新增事件範圍的自訂維度，參數填 `video_title`。

GA4 的加強型評估處理首次與換頁的 `page_view`；網站沒有另外手動傳送頁面瀏覽，避免重複計數。自訂影片事件只傳送公開的影片名稱。Google Signals 與廣告個人化訊號在網站設定中關閉。

資料從啟用後開始累積，無法補回之前的瀏覽。瀏覽器阻擋統計程式時可能不會計入，所以數字不是所有請求的完整紀錄。
