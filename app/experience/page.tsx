export default function Experience() {
    return (
        <div className="flex flex-col">
            <h1 className="flex items-center justify-center 
                            font-mono font-bold text-[4vw] 
                            bg-black py-4 text-white"
                            >Experience</h1>

            <div className="grid grid-col-4 font-mono text-[1vw]">
                <div className="col-start-1 col-span-1 flex flex-col justify-center items-center border-1 border-black p-[1vw]">
                    <h3 className="text-[1.25vw] font-semibold">Cedars-Sinai Medical Center</h3>
                    <p><i>Los Angeles, CA</i></p>
                    <p><b>Research Associate II</b></p>
                    <p>Feb 2022 - May 2024</p>
                </div>
                <div className="col-start-2 col-span-3 flex flex-col justify-center items-center border-1 border-black p-[1.5vw]">
                    <ul className="list-disc">
                        <li>
                            Applied machine learning to data by developing three custom Python scripts and macros to automate high-throughput imaging analysis, processing over 10,000 microscopy images using computer vision techniques with CellProfiler, Random Forest, and R.
                        </li>
                        <li>
                            Conducted large-scale biomedical research studying gut microbiome-CNS relationships in Parkinson&apos;s Disease patients using 50+ micro-fluidic chip models, generating complex datasets requiring advanced statistical analysis and pattern recognition.
                        </li>
                        <li>
                            Analyzed clinical research data using ANOVA and statistical methods to summarize quantitative PCR, ELISA, and Western Blot results across 50+ experiments, demonstrating expertise in healthcare data interpretation and validation.
                        </li>
                        <li>
                            Investigated therapeutic interventions by testing anti-sense oligonucleotides for SARS-CoV2 prevention in primary lung tissue and mouse models across 5 major experiments, contributing to understanding of precision medicine approaches.
                        </li>
                        <li>
                            Managed complex laboratory workflows by mastering 20+ standard operating procedures for stem.
                        </li>
                    </ul>
                </div>

                <div className="col-start-1 col-span-1 flex flex-col justify-center items-center border-1 border-black p-[1vw]">
                    <h3 className="text-[1.25vw] font-semibold">Arthritis and Pain Relief Medical Center - Dr. Soha Dolatabadi</h3>
                    <p><i>Los Angeles, CA</i></p>
                    <p><b>Medical Scribe</b></p>
                    <p>Sep 2020 - Jan 2024</p>
                </div>
                <div className="col-start-2 col-span-3 flex flex-col justify-center items-center border-1 border-black p-[1.5vw]">
                    <ul className="list-disc">
                        <li>
                            Streamlined clinical workflows by documenting and transcribing medical histories, medications, physical examinations, and treatment plans in real-time, gaining deep understanding of patient care processes and documentation requirements that insurance companies require.
                        </li>
                        <li>
                            Optimized healthcare data management by maintaining detailed electronic health records (EHR) for over 200 patients, ensuring seamless information flow between healthcare providers and insurance entities through organized documentation of lab results, imaging reports, and clinical notes.
                        </li>
                        <li>
                            Developed automation solutions by creating custom scripts and macros to eliminate repetitive charting tasks, resulting in 67% increased patient throughput (15 to 25 patients daily) and demonstrating early application of technical skills to solve healthcare inefficiencies.
                        </li>
                        <li>
                            Facilitated patient-provider communication by interfacing directly with patients in both Spanish and English to explain care instructions, diagnostic procedures, and address questions, providing insight into patient experience pain points in the healthcare journey.
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}
        