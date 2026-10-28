# Wave-1 selection, run 2026-10-28 from the scratchpad copies of research/ahrefs/*.tsv and subjects.json.
# Kept for the record of how pipeline/data/wave-1.tsv was chosen; re-run needs those inputs.
import csv, json
# Apart Style GSC clicks, 2025-12-01..2026-08-15, brands-like pages (export capped at the top 250 pages,
# so absent = fewer than 218 clicks). Pages combining two subjects credit both.
GSC = {"youngla":1407,"altard state":1350,"onitsuka tiger":1293+289,"lacemade":1082,"dressed in lala":1040,"comfrt":960,
"selkie":769,"desigual":750,"named collective":740,"derschutze":703,"oliver bonas":666,"muji":651,"sundance":636,
"cold culture":606+514,"minga london":598,"tuckernuck":587,"aelfric eden":585,"vivienne westwood":581,"white fox":580,
"quince":574,"jnco":564,"affliction":549,"scuffers":514,"flower knows":511,"jaded london":508,"johnny was":503,
"fanciful doll":502,"maniere de voir":502,"chrome hearts":497,"enfants riches deprimes":475,"coldwater creek":469,
"stay cold apparel":467,"jacques marie mage":465,"oxknit":464,"sixth dimension":459,"bylt":455,"earthbound":446,
"zara":446+279,"mochipan":439,"rituals":416,"gudrun sjoden":410,"francescas":409,"baggu":406,"wicked weasel":396,
"parade":395,"polene":391,"club l london":386,"dandy worldwide":383,"primark":382,"fear of god":377,"longines":377,
"darc sport":370,"mariemur":370,"talbots":351,"bershka":344,"allsaints":343,"seasalt cornwall":343,"mac duggal":339,
"gina tricot":334,"akira":332,"fable england":330,"massimo dutti":326,"mikuta":325,"vera bradley":325,"pixie rebels":324,
"breathedivinity":322,"bellroy":321,"cider":315,"lady pipa":312,"camper":311,"house of errors":311,"porter yoshida":304,
"on cloud":301,"kendra scott":300,"charles tyrwhitt":298,"phix":298,"pull and bear":298,"teuta matoshi":297,
"golden goose":296,"marcella":295,"edikted":294,"madhappy":294,"rihoas":290,"mirror palais":289,"uniqlo":289,
"mr jones watches":286,"blakely":284,"psycho bunny":284,"heaven sent":282,"gramicci":281,"rick owens":281,
"sisters and seekers":280,"h&m":279,"imogene and willie":278,"octobre editions":278,"lucky brand":273,"rock revival":273,
"loro piana":271,"tissot":271,"vendula london":270,"julie vos":267,"meundies":265,"new rock":265,"negative underwear":264,
"cherry kitten":263,"dairy boy":259,"miss me jeans":259,"portland leather":257,"james avery":255,"annies ibiza":254,
"carbon 2 cobalt":254,"old navy":254,"33mm":251,"boston proper":248,"subdued":248,"damson madder":246,"diemme":245,
"bobbies":243,"kill crew":239,"axel arigato":239,"ann taylor":238,"o mighty":237,"j mclaughlin":235,"vionic":235,
"freitag":233,"moscot":231,"cool shirtz":228,"crumpler":228,"micas":227,"buckle":226,"papa dont preach":226,"olukai":225,
"aeropostale":224,"irregular choice":224,"pendleton":223,"hot chocolate design":222,"topologie":222,"ditch la":221,
"freebird":221,"laura ashley":220,"ogl move":220,"ask and embla":218,"boohooman":218,"perte dego":218}

vol = {}
for n in range(5):
    for r in csv.DictReader(open(f"volumes_{n}.tsv"), delimiter="\t"):
        v = r["volume"]; vol[r["keyword"]] = int(v) if v not in ("", None) else None
subjects = json.load(open("subjects.json"))
missing_gsc = [k for k in GSC if k not in subjects]
rows = []
for s in subjects:
    b, st = vol.get(f"brands like {s}"), vol.get(f"stores like {s}")
    best = max([x for x in (b, st) if x is not None], default=None)
    prefix = "stores" if (st or 0) > (b or 0) else "brands"
    clicks = GSC.get(s, 0)
    qualifies = (best or 0) >= 30 or clicks >= 218
    rows.append(dict(subject=s, brands_vol=b, stores_vol=st, best_vol=best, prefix=prefix, apart_clicks=clicks,
                     qualifies=qualifies, why=("volume" if (best or 0) >= 30 else "") + ("+clicks" if clicks >= 218 else "")))
rows.sort(key=lambda r: (-(r["best_vol"] or 0), -r["apart_clicks"]))
w = [r for r in rows if r["qualifies"]]
with open("wave-1.tsv", "w") as f:
    f.write("rank\tsubject\turl_prefix\tbest_us_volume\tbrands_like_vol\tstores_like_vol\tapart_clicks_dec_aug\tqualifies_by\n")
    for i, r in enumerate(w, 1):
        f.write(f"{i}\t{r['subject']}\t{r['prefix']}\t{r['best_vol'] if r['best_vol'] is not None else ''}\t{'' if r['brands_vol'] is None else r['brands_vol']}\t{'' if r['stores_vol'] is None else r['stores_vol']}\t{r['apart_clicks']}\t{r['why'].lstrip('+')}\n")
print("GSC names not in subject list:", missing_gsc)
print(f"subjects {len(rows)}; wave 1 {len(w)}; by volume only {sum(1 for r in w if r['why']=='volume')}, clicks only {sum(1 for r in w if r['why']=='+clicks')}, both {sum(1 for r in w if r['why']=='volume+clicks')}")
print(f"stores prefix: {sum(1 for r in w if r['prefix']=='stores')}; total best volume {sum(r['best_vol'] or 0 for r in w)}")
print("dropped:", ", ".join(f"{r['subject']}({r['best_vol']})" for r in rows if not r["qualifies"]))
print("--- top 30"); [print(f"{i:3d} {r['subject']:<26} {r['prefix']:<7} vol {r['best_vol']!s:>5}  clicks {r['apart_clicks']:>5}") for i, r in enumerate(w[:30], 1)]
