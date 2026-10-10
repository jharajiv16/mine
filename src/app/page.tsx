"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, Heart, LockKeyhole, Mail, RotateCcw, Sparkles, X } from "lucide-react";
import { scrapbook } from "../data/scrapbook";

const rise = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.6 } };

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [note, setNote] = useState<number | null>(null);
  const [surprise, setSurprise] = useState<number | null>(null);
  const [letter, setLetter] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion ? { initial: false, whileInView: undefined, transition: { duration: 0 } } : rise;
  const restart = () => { setOpened(false); setNote(null); setSurprise(null); setLetter(false); window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); };
  const photoIcon = (symbol: (typeof scrapbook.gallery.frames)[number]["symbol"]) => symbol === "heart" ? <Heart size={20} /> : symbol === "mail" ? <Mail size={20} /> : <Sparkles size={20} />;
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
    };
    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);
  useEffect(() => {
    if (!lightbox) return;
    lightboxRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [lightbox]);

  return (
    <main>
      <div className="reading-progress" aria-hidden="true"><span style={{ width: `${scrollProgress}%` }} /></div>
      <section className={`hero ${opened ? "hero--opened" : ""}`} aria-label={scrapbook.navigation.openingAriaLabel}>
        <div className="paper-grain" />
        <div className="hero-nav"><span>{scrapbook.navigation.brand}</span><span>{scrapbook.navigation.chapterCount}</span></div>
        <div className="hero-content">
          <p className="eyebrow">{scrapbook.hero.eyebrow}</p><h1>{scrapbook.hero.headingLead} <em>{scrapbook.recipient}.</em></h1><p className="hero-copy">{scrapbook.hero.intro}</p>
          <div className="envelope-wrap" aria-hidden={opened}><motion.div className={`envelope ${opened ? "envelope--open" : ""}`} animate={opened ? { y: 20, scale: 0.98 } : { y: 0, scale: 1 }}><div className="envelope-flap" /><div className="envelope-letter"><span>{scrapbook.hero.envelopeLabel}</span><strong>♡</strong></div><div className="wax-seal"><Heart size={18} fill="currentColor" /></div></motion.div><span className="tape tape--hero" /></div>
          <p className="hand-note">{scrapbook.hero.handwrittenNote} <span>♡</span></p>
          <button className="button button--dark" onClick={() => { setOpened(true); setTimeout(() => document.getElementById("intro")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }), 280); }} disabled={opened}>{opened ? scrapbook.hero.openedButton : scrapbook.hero.openButton} <ArrowRight size={17} /></button>
        </div>
        <div className="scribble scribble--top" dangerouslySetInnerHTML={{ __html: scrapbook.hero.sideNote }} /><div className="hero-flower">✿</div>
      </section>

      <section id="intro" className="intro section">
        <motion.div {...motionProps} className="section-heading"><p className="eyebrow">{scrapbook.intro.eyebrow}</p><h2>{scrapbook.intro.headingLead}<br /><em>{scrapbook.intro.headingAccent}</em></h2></motion.div>
        <motion.div {...motionProps} className="intro-layout"><div className="intro-copy"><p className="large-copy">{scrapbook.intro.largeCopy}</p><p>{scrapbook.intro.body}</p><span className="signature">{scrapbook.intro.signature}</span></div><div className="scrap-stack" aria-label="Decorative scrapbook collage"><div className="scrap-paper scrap-paper--back" dangerouslySetInnerHTML={{ __html: scrapbook.intro.collageBack }} /><div className="scrap-photo"><span dangerouslySetInnerHTML={{ __html: scrapbook.intro.collagePhoto }} /><Heart size={16} /></div><div className="scrap-paper scrap-paper--front" dangerouslySetInnerHTML={{ __html: scrapbook.intro.collageFront }} /><span className="tape tape--stack" /></div></motion.div>
        <a className="scroll-cue" href="#story">{scrapbook.intro.scrollLabel} <ArrowDown size={15} /></a>
      </section>

      <section id="story" className="story section section--lined">
        <motion.div {...motionProps} className="section-heading"><p className="eyebrow">{scrapbook.story.eyebrow}</p><h2>{scrapbook.story.headingLead}<br /><em>{scrapbook.story.headingAccent}</em></h2><p className="section-sub">{scrapbook.story.subheading}</p></motion.div>
        <div className="timeline">{scrapbook.timeline.map((item, index) => <motion.article {...motionProps} whileHover={reduceMotion ? undefined : { y: -5 }} className={`memory memory--${item.tone}`} key={item.title}><div className="memory-index">0{index + 1}</div><div className="memory-card"><span className="memory-date">{item.date}</span><h3>{item.title}</h3><p>{item.copy}</p><span className="sticker">{item.sticker}</span></div></motion.article>)}</div>
      </section>

      <section className="gallery section"><motion.div {...motionProps} className="section-heading section-heading--row"><div><p className="eyebrow">{scrapbook.gallery.eyebrow}</p><h2>{scrapbook.gallery.headingLead}<br /><em>{scrapbook.gallery.headingAccent}</em></h2></div></motion.div><div className="photo-grid">{scrapbook.gallery.frames.map((frame, index) => <motion.button {...motionProps} whileHover={reduceMotion ? undefined : { y: -8, rotate: 0 }} key={frame.src} className={`photo-frame photo-frame--${["one", "two", "three", "four", "five"][index]}`} onClick={() => { setSelectedPhoto(index); setLightbox(true); }}><span className="photo-placeholder"><img src={frame.src} alt={frame.alt} />{photoIcon(frame.symbol)}</span><small>{frame.caption}</small></motion.button>)}</div></section>

      <section className="notes section section--blush"><motion.div {...motionProps} className="section-heading"><p className="eyebrow">{scrapbook.notes.eyebrow}</p><h2>{scrapbook.notes.headingLead}<br /><em>{scrapbook.notes.headingAccent}</em></h2><p className="section-sub">{scrapbook.notes.subheading}</p></motion.div><div className="notes-grid">{scrapbook.notesList.map((item, index) => <button key={`note-${index}`} className={`note note--${item.color} ${note === index ? "note--open" : ""}`} onClick={() => setNote(note === index ? null : index)} aria-expanded={note === index}><span className="note-fold" /><LockKeyhole size={15} /><strong>{item.title}</strong><AnimatePresence>{note === index && <motion.p key={`note-message-${index}`} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>{item.message}</motion.p>}</AnimatePresence><span className="note-mark">{note === index ? scrapbook.notes.openLabel : scrapbook.notes.closedLabel}</span></button>)}</div></section>

      <section className="game section"><motion.div {...motionProps} className="game-card"><p className="eyebrow">{scrapbook.game.eyebrow}</p><h2>{scrapbook.game.headingLead}<br /><em>{scrapbook.game.headingAccent}</em></h2><p>{scrapbook.game.instruction}</p><div className="tokens">{scrapbook.surprises.map((item, index) => <motion.button whileTap={reduceMotion ? undefined : { scale: 0.94 }} key={item.label} className={`token token--${index + 1} ${surprise === index ? "token--picked" : ""}`} onClick={() => setSurprise(index)} aria-label={`Choose ${item.label}`}><span>{item.symbol}</span><small>{item.label}</small></motion.button>)}</div><AnimatePresence mode="wait">{surprise !== null && <motion.div className="surprise-result" role="status" aria-live="polite" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={surprise}><Sparkles size={15} />{scrapbook.surprises[surprise].message}</motion.div>}</AnimatePresence><button className="reset-button" onClick={() => setSurprise(null)}><RotateCcw size={13} /> {scrapbook.game.replayLabel}</button></motion.div></section>

      <section className="letter section section--lined"><motion.div {...motionProps} className="section-heading"><p className="eyebrow">{scrapbook.letter.eyebrow}</p><h2>{scrapbook.letter.headingLead}<br /><em>{scrapbook.letter.headingAccent}</em></h2><p className="section-sub">{scrapbook.letter.subheading}</p></motion.div><div className={`letter-paper ${letter ? "letter-paper--open" : ""}`}><div className="letter-seal">♡</div>{!letter ? <><Mail size={28} /><h3>{scrapbook.letter.closedTitle}</h3><button className="button button--outline" onClick={() => setLetter(true)}>{scrapbook.letter.readButton} <ArrowRight size={16} /></button></> : <><motion.div className="letter-copy" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.5 }}><p>{scrapbook.letter.greeting}</p>{scrapbook.letter.paragraphs.map((paragraph, index) => <motion.p initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : index * 0.08 }} key={`letter-${index}`}>{paragraph}</motion.p>)}<p>{scrapbook.letter.signoff}<br /><span className="signature signature--large">{scrapbook.sender} ♡</span></p></motion.div><button className="close-letter" onClick={() => setLetter(false)}>{scrapbook.letter.foldButton} <ArrowLeft size={14} /></button></>}</div></section>

      <footer className="closing section"><span className="footer-flower">✿</span><p className="eyebrow">{scrapbook.closing.eyebrow}</p><h2>{scrapbook.closing.headingLead}<br /><em>{scrapbook.closing.headingAccent}</em></h2><p>{scrapbook.closing.body}</p><span className="signature signature--large">{scrapbook.closing.signoff}</span><button className="button button--dark" onClick={restart}>{scrapbook.closing.restartButton} <RotateCcw size={16} /></button></footer>

      <AnimatePresence>{lightbox && <motion.div ref={lightboxRef} className="lightbox" role="dialog" aria-modal="true" aria-label={scrapbook.gallery.lightboxTitle} tabIndex={-1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onKeyDown={(event) => { if (event.key === "Escape") setLightbox(false); }} onClick={() => setLightbox(false)}><div className="lightbox-card" onClick={(event) => event.stopPropagation()}><button className="lightbox-close" onClick={() => setLightbox(false)} aria-label={scrapbook.gallery.closeLabel}><X /></button><img className="lightbox-image" src={scrapbook.gallery.frames[selectedPhoto].src} alt={scrapbook.gallery.frames[selectedPhoto].alt} /><h3>{scrapbook.gallery.frames[selectedPhoto].label}</h3><p>{scrapbook.gallery.frames[selectedPhoto].caption}</p></div></motion.div>}</AnimatePresence>
    </main>
  );
}
