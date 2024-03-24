import { Heading, Text } from '@react-spectrum/text';
import CVCss from './CV.module.css'
import { Link } from '@react-spectrum/link';
const CV = ({isActive}) => (
    <div className={`${CVCss.container} ${isActive ? CVCss.active : ''}`}>

        <Link UNSAFE_style={ {color:'black', fontSize:'small', textAlign:"center", marginBottom:"2dvh"}} target='_blank' href="https://drive.google.com/file/d/1O6UMGOh8zU3Th-OuXcS3fcFTz3llvDbp/view?usp=sharing"> Click here to download my full CV </Link>
        {/* Education Section */}
        <Heading UNSAFE_className={ CVCss.primaryHeading }>
            EDUCATION
        </Heading>
        {/* Education Item1 */}
        <Heading UNSAFE_className={ CVCss.secondaryHeading }>
            Department of Biochemical Engineering and Biotechnology, IIT Delhi (2022- Present)
        </Heading>
        <Heading UNSAFE_className= { CVCss.tertiaryHeading }>
            <span className={CVCss.tertiaryHeadingItalic}>PhD Biochemical Engineering and Biotechnology </span>
        </Heading>
        <ul>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                  <span className={ CVCss.textTitle }>Research Area:</span> Electromicrobiology 
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                <span className={ CVCss.textTitle }>Thesis title:</span> Towards enhancing electron transfer between electroactive microorganisms and  electrodes  
                </Text>
            </li>
        </ul>

        {/* Education Item2 */}

        <Heading UNSAFE_className={ CVCss.secondaryHeading }>
            Department of Biosciences and Bioengineering, IIT Roorkee (2020- 2022)
        </Heading>
        <Heading UNSAFE_className= { CVCss.tertiaryHeading }>
            <span className={CVCss.tertiaryHeadingItalic}>
                MSc. Biotechnology
            </span>
        </Heading>
        <ul>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                  <span className={ CVCss.textTitle }>Research Area:</span> Antimicrobial Resistance
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                <span className={ CVCss.textTitle }>Thesis title:</span> Understanding and Characterisation of Beta-Lactamase BlaA from
                    Yersinia enterocolitica and in-silico characterization of Beta-Lactamase MAB from
                    Mycobacterium abscessus 
                </Text>
            </li>
        </ul>

        {/* Education Item3 */}
        <Heading UNSAFE_className={ CVCss.secondaryHeading }>
            Hansraj College, University of Delhi (2017- 2020)
        </Heading>
        <Heading UNSAFE_className= { CVCss.tertiaryHeading }>
            <span className={CVCss.tertiaryHeadingItalic}>
                BSc. Life Sciences
            </span>
        </Heading>

        <br />
        {/* Skills Subsection */}
        <Heading UNSAFE_className={ CVCss.primaryHeading }>
            Skills
        </Heading>
        {/* List down all the skills */}
        <ul>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                  <span className={ CVCss.textTitle }>Experimental:</span> Electrochemical techniques (cyclic voltammetry,
                        chronoamperometry, chronocoulometry, electrochemical impedance spectroscopy),
                        SDS-PAGE, SEM, microbiology techniques, plant tissue culture from callus and
                        embryo, protein purification (affinity chromatography, size-exclusion
                        chromatography), biochemical techniques, biophysical techniques, Fluorescence
                        spectroscopy, enzyme kinetics, protein crystallization, X-ray diffraction, Microbial fuel
                        cells (MFC), Scanning Electron Microscopy (SEM), Energy Dispersive Spectroscopy
                        (EDS) and Brunauer Emmett Teller (BET)
                </Text>
            </li>
            <br />
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                <span className={ CVCss.textTitle }> Computer and Bioinformatics:</span> Working in LINUX environment, Microsoft office (word,
                        excel and power-point) using sequence and structural analysis tools (Pymol, COOT,
                        Autodock, CCP4i, SwissModel, NAMD, VMD, SwissPDB Viewer), MD Simulation,
                        Molecular Docking, Origin and GraphPad
                </Text>
            </li>
        </ul>
        <br />
        {/* Internships, Trainings and Volunteering experience  */}
        <Heading UNSAFE_className={ CVCss.primaryHeading }>
            Internships, Trainings and Volunteering experience
        </Heading>
        {/* List down all the skills */}
        <ul>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                American Society for Microbiology (ASM) Future Leaders Mentorship Fellow
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Space Generation Advisory Council (SGAC) Mentorship Fellow
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Won ASA Student Representative Scholarship for Mars Analogue Site Expedition
                (MASE’2022) and participated in the MASE program in Rajasthan Explored Mars
                Analogue sites in Rajasthan with mentors from the Dept of Astrobiology Spaceonova,
                understanding extremophiles and the possibility of life on Mars, hunting for
                biosignatures, analyzing stromatolites and tardigrades
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Completed Science Communication Online Programme (SCOPE) run by the
                Northwestern University, USA
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Content Writer at Astrobiology Society of America (ASA)
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Intern at IIT Bombay (Proteomics Internship Program 2021)
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Intern at United Nations
                </Text>
            </li>
        </ul>
        <br />
        {/* Poster and Research */}

        <Heading UNSAFE_className={ CVCss.primaryHeading }>
            Conferences and Poster Presentations
        </Heading>
        {/* List down all the skills */}
        <ul>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Won the best poster award for the poster titled: <span className={ CVCss.textTitle}>Understanding and characterization
of MAB Beta-lactamase from Mycobacterium abscessus</span>: Focusing on Variant
Analysis, Molecular Docking Analysis and MD Simulation at the “Rosetrees
Interdisciplinary workshop: Quantitative approaches to antimicrobial resistance and
microbiology” organized by the University of Durham and University of Sheffield (25th
-26th January 2022)
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Presented poster on <span className={CVCss.textTitle}>MAB beta-lactamase at the Antimicrobial Resistance-Genomes,
Big Data and Emerging Technologies 2022</span> -Virtual Conference organized by
Wellcome Connecting Science (27-29 April 2022)
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Attended The International Conference on Nanomaterials for Electro -catalysis
                Technology (I-CONECT 2023) (20th -22nd March 2023)
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Attended and volunteered at the 48th National Seminar on Crystallography (NSC)
                conference (25-27th November 2021)
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Attended the International Conference on Data Science in Biology (ICDSB) (4,5 and
8th September 2020)
                </Text>
            </li>
        </ul>
        <br />

        {/* Academic Achievements */}

        <Heading UNSAFE_className={ CVCss.primaryHeading }>
        Academic Achievements
        </Heading>
        {/* List down all the skills */}
        <ul>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                GATE 2022 Qualified (Rank-233)
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                IIT JAM 2020 Rank-23
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Qualified TIFR/JGEEBILS EXAM 2020
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Science Topper Queen Mary's School (class12), English and Physical Education
Topper
                </Text>
            </li>
        </ul>
        <br />

        {/* Position of Responsibility */}

        <Heading UNSAFE_className={ CVCss.primaryHeading }>
        Position of Responsibility
        </Heading>
        {/* List down all the skills */}
        <ul>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Mars on Earth Project (MoEP) Indian Chapter Coordinator
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Department Placement Representative (DPR) for MSc. Biotech batch at IIT
Roorkee
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Mentorship Head, Child Rights and You (NGO) IIT Roorkee Chapter
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Community Building Vertical Head, Biotech Students Society (BSS), IIT Roorkee
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Life Sciences Department President, Hansraj College, University of Delhi
                </Text>
            </li>
            <li>
                <Text UNSAFE_className={ CVCss.text }>
                Class Representative BSc Life Sciences (2017-2020)
                </Text>
            </li>
        </ul>
        <br />
    </div>
);

export default CV;