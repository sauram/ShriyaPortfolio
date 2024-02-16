import { Heading, Text } from '@react-spectrum/text';
import ResearchCss from './Research.module.css'
import { Divider } from '@react-spectrum/divider';
const Research = ({isActive}) => (
    <div className={`${ResearchCss.container} ${isActive ? ResearchCss.active : ''}`}>
        <Heading level={2} UNSAFE_className={ ResearchCss.secondaryHeading }>
            Phd Project
        </Heading>
        <Heading level={1} UNSAFE_className= { ResearchCss.primaryHeading }>
        Towards enhancing electron transfer between electroactive microorganisms 
        and electrodes
        </Heading>
        {/* Image Insert */}
        <Text UNSAFE_className={ ResearchCss.text }>
        My PhD research primarily centers on discovering new materials suitable for electrode fabrication in a range of bioelectrochemical systems (BES), such as microbial three-electrode systems or microbial fuel cells. This involves enhancing conventional electrode materials with conductive polymers, employing patterning techniques to generate diverse surface designs, and facilitating the self-assembly of nanoparticles on the electrode. These efforts aim to boost the electrode's conductivity, hydrophilicity, and surface area. Exploring different BES systems using computational tools and mathematical modelling to determine optimising parameters theoretically before implementing them in practical systems. I will employ various software tools, such as COMSOL, Material Studio, and bioinformatics tools like molecular docking and molecular dynamics simulations, to better understand the extracellular electron transfer mechanism and the associated proteins. This knowledge can help me identify new directions to enhance electron transfer pathways
        </Text>
        <Heading level={2} UNSAFE_className= { ResearchCss.secondaryHeading}>
            Other Phd Projects
        </Heading>
        <Text UNSAFE_className={ ResearchCss.text }>
        I have been involved in two subprojects:
        </Text>
        <ol>
            <li>
                <Text UNSAFE_className={ ResearchCss.text }>
                    1. Boosting the bio-electrode: electroactive biofilms enhanced with electrochemically deposited nanomaterials <span className={ ResearchCss.funding }>(Hebrew University of Jerusalem-IITD collaborative funded project)</span>
                </Text>
            </li>
            <br/>
            <li>
                <Text UNSAFE_className={ ResearchCss.text }>
                    2. Design of self-assembled electrodes for enhanced microbial electron transfer in bioelectrochemical systems <span className={ ResearchCss.funding }>(DBT-funded project)</span>
                </Text>
            </li>
        </ol>
        <hr />
        <Divider />
        <hr />
        <Heading level={2} UNSAFE_className={ ResearchCss.secondaryHeading}>
            Master's Project
        </Heading>
        <Heading level={1} UNSAFE_className={ ResearchCss.primaryHeading}>
            Understanding and characterization of BlaA beta-lactamase from Yersinia enterocolitica 
        </Heading>
        <Text UNSAFE_className={ ResearchCss.text }>
            The accidental discovery of the antibiotic penicillin by Sir Alexander Fleming was termed a significant breakthrough in the 
            history of humanity. What started as a revolutionary approach to treating diseases is now a 
            cause for concern. Antimicrobial resistance is predicted to become one of the leading 
            causes of death worldwide by 2050. One of the fundamental mechanisms responsible for 
            antimicrobial resistance is the production of beta-lactamases. Therefore, understanding 
            these enzymes and characterising them becomes of utmost importance for developing new drugs 
            against them. This project involves in-vitro as well as in-silico characterization of two of 
            these beta-lactamases: BlaA from Yersinia enterocolitica and MAB from Mycobacterium abscessus. 
            BlaA was purified, followed by biochemical and biophysical characterization using 
            steady-state kinetics, inhibition kinetics, fluorescence spectroscopy, circular dichroism spectroscopy, and structure determination through X-ray diffraction.
        </Text>
        <hr />
        <Divider />
        <hr />
        <Heading level={2} UNSAFE_className={ ResearchCss.secondaryHeading}>
            Summer Internship Project
        </Heading>
        <Heading level={1} UNSAFE_className={ ResearchCss.primaryHeading}>
            In-silico characterization of MAB beta-lactamase from Mycobacterium abscessus
        </Heading>
        <Text UNSAFE_className={ ResearchCss.text }>
        In-silico techniques were used for sequence analysis, structure-based analysis, phylogenetic analysis, molecular docking, 
        and dynamic studies for MAB beta-lactamase variants to get a better understanding of 
        how the different variants evolve and the conservative residues that can be targeted 
        to render these enzymes ineffective so as to improve our 
        combating strategies for developing novel antibiotics against them.
        </Text>
    </div>
);

export default Research;