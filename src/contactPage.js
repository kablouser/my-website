import Table from 'react-bootstrap/Table';
import CV from './zecheng hu cv.pdf';

export default function ContactPage()
{
    return (
        <div className="foreground">
            <Table striped bordered>
                <tbody>
                    <tr>
                        <td className="contact-col-left">Phone</td>
                        <td>07840 059015</td>
                    </tr>
                    <tr>
                        <td className="contact-col-left">Email</td>
                        <td className="email">contact@zechenghu.games</td>
                    </tr>
                    <tr>
                        <td className="contact-col-left">CV</td>
                        <td><a href={CV}>Click to download</a></td>
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
                            <a href="https://www.linkedin.com/in/jason-hu-b0b76b176/">
                                <img className="contact-logo" alt="Linked in" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>);;
}