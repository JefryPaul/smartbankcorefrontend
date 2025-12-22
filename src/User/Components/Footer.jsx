import { Email, Phone, WhatsApp, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
    return (
        <footer
            className="text-center text-white py-10 px-4"
            style={{ backgroundColor: "#662828" }}
        >
            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-3" style={{ color: "#C7A58C" }}>
                    Contact Us
                </h3>

                <p className="flex justify-center items-center gap-2 text-lg">
                    <Email sx={{ fontSize: 22 }} /> smartbankcore@gmail.com
                </p>

                <p className="flex justify-center items-center gap-2 text-lg mt-1">
                    <Phone sx={{ fontSize: 22 }} /> +91 98765 43210
                </p>
            </div>

            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-3" style={{ color: "#C7A58C" }}>
                    Connect With Us
                </h3>

                <div className="flex justify-center gap-6">
                    <a href="#" className="text-white hover:text-[#C7A58C] transition">
                        <WhatsApp sx={{ fontSize: 32 }} />
                    </a>

                    <a href="#" className="text-white hover:text-[#C7A58C] transition">
                        <Instagram sx={{ fontSize: 32 }} />
                    </a>

                    <a href="#" className="text-white hover:text-[#C7A58C] transition">
                        <LinkedIn sx={{ fontSize: 32 }} />
                    </a>
                </div>
            </div>

            <div className="mt-8">
                <p
                    className="text-lg"
                    style={{ color: "#F8F3F0" }}
                >
                    Copyright@ 2025
                </p>
            </div>
        </footer>
    );
}

export default Footer;
