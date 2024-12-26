import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('login')
    login(@Body() loginDto: any) {
        const fakeAccessToken = 'fake-token-1234567890abcdef';
        const fakeRefreshToken = 'fake-token-abcdef1234567890';

        return {
            message: 'Login successful',
            user: loginDto,
            accessToken: fakeAccessToken,
            refreshToken: fakeRefreshToken,
        };
    }

    @Post('refresh')
    refreshToken(@Body() refreshDto: any) {
        const fakeAccessToken = 'fake-token-1234567890abcdef';
        const fakeRefreshToken = 'fake-token-abcdef1234567890';

        return {
            user: refreshDto,
            accessToken: fakeAccessToken,
            refreshToken: fakeRefreshToken,
        };
    }
}
