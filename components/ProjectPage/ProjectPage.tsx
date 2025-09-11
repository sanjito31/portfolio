import Page from "@/components/BasicPageLayout"
import BasicInfo, { BasicInfoProps } from "@/components/ProjectPage/BasicInfo"
import TechStack, { TechStackProps } from "@/components/ProjectPage/TechStack"

export type ProjectPageProps = {
    pageTitle: string,
    basicInfoProps: BasicInfoProps,
    techStackProps: TechStackProps,
    children?: React.ReactNode
}

export default function ProjectPage({ pageTitle, basicInfoProps, techStackProps, children }: ProjectPageProps) {
    return (
        <Page pageTitle={pageTitle}>
            <div className="font-mono">
                <div className="flex flex-col md:grid md:grid-cols-2">
                    
                    <BasicInfo {...basicInfoProps} className="md:col-start-1 md:col-span-1 flex flex-col items-start justify-center border-1 p-10"/>

                    <TechStack {...techStackProps} className="md:col-start-2 md:col-span-1 flex flex-col items-center justify-center border-1 p-4 md:p-10"/>
                    
                    <div className="md:col-start-1 md:col-span-2 flex flex-col items-center justify-center border-1">
                        {children}
                    </div>
                </div>
            </div>
        </Page>
    )
}