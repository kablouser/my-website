import Table from 'react-bootstrap/Table';

export default function ContactPage()
{
    return (
        <div className="foreground">
            <Table striped bordered>
                <tbody>
                    <tr>
                        <td className="contact-col-left">Email</td>
                        <td className="email">contact@zechenghu.games</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <a href="https://kablouser.itch.io/">
                                <img className="contact-logo" alt="itch.io" src="https://static.itch.io/images/logo-black-new.svg" />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <a href="https://www.linkedin.com/in/zechenghu/">
                                <img className="contact-logo" alt="Linked in" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>);;
}