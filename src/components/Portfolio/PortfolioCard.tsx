import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Trans } from "@lingui/macro"
import { IPortfolioItem } from "data/Portfolio/portfolio"
import * as React from "react"
import { Columns, Card, Heading } from "react-bulma-components"

const PortfolioCard = ({
    image,
    description,
    name,
    publicUrl,
    repositoryUrl,
}: IPortfolioItem) => {
    return (
        <Card className="portfolio-card">
            <Card.Image size="4by3" src={image} />
            <Card.Content className="portfolio-card__content">
                <Heading size={4} textAlignment="centered">
                    {name}
                </Heading>
                {description.map((p, i) => (
                    <p
                        key={i}
                        className="portfolio-card__description"
                        dangerouslySetInnerHTML={{ __html: p }}
                    />
                ))}
            </Card.Content>
            <Card.Footer>
                <Card.Footer.Item>
                    <a
                        href={repositoryUrl}
                        target={"_blank"}
                        className="is-flex"
                        style={{ alignItems: "center" }}
                    >
                        <FontAwesomeIcon icon={faGithub} size={"2x"} />
                        <span style={{ marginLeft: "0.5rem" }}>
                            <Trans>
                                Source
                            </Trans>
                        </span>
                    </a>
                </Card.Footer.Item>
                <Card.Footer.Item>
                    <a
                        href={publicUrl}
                        target={"_blank"}
                        className="is-flex"
                        style={{ alignItems: "center" }}
                    >
                        <FontAwesomeIcon icon={faGlobe} size={"2x"} />
                        <span style={{ marginLeft: "0.5rem" }}>
                            <Trans>
                                Demo
                            </Trans>
                        </span>
                    </a>
                </Card.Footer.Item>
            </Card.Footer>
        </Card>
    )
}

export default PortfolioCard