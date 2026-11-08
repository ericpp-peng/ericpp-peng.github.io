import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { portraitSettings, profile } from "../data/profile";
import { assetPath } from "../lib/assetPath";

const storageKey = "po-peng-portrait-v2";
type Settings = typeof portraitSettings;
const development = process.env.NODE_ENV === "development";

function validSettings(value: unknown): value is Settings {
  if (!value || typeof value !== "object") return false;
  const settings = value as Settings;
  return (
    Number.isFinite(settings.zoom) &&
    settings.zoom >= 1 &&
    settings.zoom <= 2.5 &&
    Number.isFinite(settings.horizontal) &&
    Math.abs(settings.horizontal) <= 100 &&
    Number.isFinite(settings.vertical) &&
    Math.abs(settings.vertical) <= 100
  );
}

export default function Portrait() {
  const [settings, setSettings] = useState(portraitSettings);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!development) return;
    try {
      const saved: unknown = JSON.parse(
        localStorage.getItem(storageKey) || "null",
      );
      if (validSettings(saved)) setSettings(saved);
    } catch {
      // Preview remains usable when browser storage is unavailable.
    }
  }, []);

  function update(next: Settings) {
    setSettings(next);
    setCopied(false);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // Keep live adjustment available even without persistence.
    }
  }

  async function copySettings() {
    const text = `export const portraitSettings = ${JSON.stringify(settings, null, 2)};`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  // Limit panning to the zoomed image's extra area so the circle stays filled.
  const extra = (settings.zoom - 1) / 2;
  return (
    <div className="portrait-area">
      <Link href="/" className="portrait-link" aria-label="Po Peng home">
        <Image
          className="portrait"
          src={assetPath("/images/profilepic-v2.jpg")}
          alt={profile.name}
          width={188}
          height={188}
          priority
          style={{
            transform: `translate(${settings.horizontal * extra}%, ${settings.vertical * extra}%) scale(${settings.zoom})`,
          }}
        />
      </Link>
      {development && (
        <details className="portrait-controls">
          <summary>調整照片</summary>
          <label>
            <span>
              放大倍率 <output>{Math.round(settings.zoom * 100)}%</output>
            </span>
            <input
              aria-label="放大倍率"
              type="range"
              min="100"
              max="250"
              step="5"
              value={Math.round(settings.zoom * 100)}
              onChange={(event) =>
                update({ ...settings, zoom: Number(event.target.value) / 100 })
              }
            />
          </label>
          <label>
            <span>
              左右位置 <output>{settings.horizontal}</output>
            </span>
            <input
              aria-label="左右位置"
              type="range"
              min="-100"
              max="100"
              step="1"
              value={settings.horizontal}
              onChange={(event) =>
                update({ ...settings, horizontal: Number(event.target.value) })
              }
            />
          </label>
          <label>
            <span>
              上下位置 <output>{settings.vertical}</output>
            </span>
            <input
              aria-label="上下位置"
              type="range"
              min="-100"
              max="100"
              step="1"
              value={settings.vertical}
              onChange={(event) =>
                update({ ...settings, vertical: Number(event.target.value) })
              }
            />
          </label>
          <div className="portrait-actions">
            <button type="button" onClick={() => update(portraitSettings)}>
              重設
            </button>
            <button type="button" onClick={copySettings}>
              複製設定
            </button>
          </div>
          <p role="status">
            {copied
              ? "已複製，可貼到對話讓我套用。"
              : "本機預覽會自動記住。調好後複製設定給我，即可套用成網站預設值。"}
          </p>
          <pre aria-label="目前照片設定">
            {JSON.stringify(settings, null, 2)}
          </pre>
        </details>
      )}
    </div>
  );
}
